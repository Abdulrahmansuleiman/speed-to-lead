// ============================================================
// GOOGLE APPS SCRIPT - Deploy this in your Google Sheet
// ============================================================
// Steps:
// 1. Open your Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Replace ALL the default code with this script
// 4. Click Save (Ctrl+S)
// 5. Click Deploy > New Deployment
// 6. Select type: Web app
// 7. Execute as: Me
// 8. Who has access: Anyone
// 9. Click Deploy
// 10. Copy the Web App URL
// 11. Set it as GOOGLE_APPS_SCRIPT_URL in your Vercel env vars
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById("1y1can7g5coLNuJOHjCJMemvEIORtd3uDPOgWFZSPCAU").getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    var name = data.name || "";
    var email = data.email || "";
    var timestamp = data.timestamp || new Date().toISOString();

    // If sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email"]);
    }

    sheet.appendRow([timestamp, name, email]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
