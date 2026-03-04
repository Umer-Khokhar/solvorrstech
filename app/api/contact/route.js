import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, projectTypes, message } = body;

    // Authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F", // Adjust based on your sheet name and columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            email,
            phone || "N/A",
            projectTypes.join(", "),
            message,
          ],
        ],
      },
    });

    return NextResponse.json(
      { success: true, data: response.data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save lead" },
      { status: 500 },
    );
  }
}
