function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById("1y1can7g5coLNuJOHjCJMemvEIORtd3uDPOgWFZSPCAU").getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    var name = data.name || "";
    var email = data.email || "";
    var tz = data.timezone || "Unknown";
    var now = new Date();
    var timestamp = Utilities.formatDate(now, "Africa/Lagos", "MMMM dd, yyyy - h:mm:ss a") + " WAT";

    var country = getCountryFromTimezone(tz);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Country", "Timezone"]);
    }

    sheet.appendRow([timestamp, name, email, country, tz]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getCountryFromTimezone(tz) {
  var map = {
    "Africa/Lagos": "Nigeria",
    "Africa/Accra": "Ghana",
    "Africa/Nairobi": "Kenya",
    "Africa/Johannesburg": "South Africa",
    "Africa/Cairo": "Egypt",
    "Africa/Casablanca": "Morocco",
    "Africa/Addis_Ababa": "Ethiopia",
    "America/New_York": "United States",
    "America/Chicago": "United States",
    "America/Denver": "United States",
    "America/Los_Angeles": "United States",
    "America/Anchorage": "United States",
    "America/Toronto": "Canada",
    "America/Vancouver": "Canada",
    "America/Sao_Paulo": "Brazil",
    "America/Mexico_City": "Mexico",
    "America/Argentina/Buenos_Aires": "Argentina",
    "America/Bogota": "Colombia",
    "America/Santiago": "Chile",
    "America/Lima": "Peru",
    "Europe/London": "United Kingdom",
    "Europe/Paris": "France",
    "Europe/Berlin": "Germany",
    "Europe/Madrid": "Spain",
    "Europe/Rome": "Italy",
    "Europe/Amsterdam": "Netherlands",
    "Europe/Brussels": "Belgium",
    "Europe/Zurich": "Switzerland",
    "Europe/Vienna": "Austria",
    "Europe/Stockholm": "Sweden",
    "Europe/Oslo": "Norway",
    "Europe/Copenhagen": "Denmark",
    "Europe/Helsinki": "Finland",
    "Europe/Warsaw": "Poland",
    "Europe/Prague": "Czech Republic",
    "Europe/Budapest": "Hungary",
    "Europe/Bucharest": "Romania",
    "Europe/Athens": "Greece",
    "Europe/Istanbul": "Turkey",
    "Europe/Moscow": "Russia",
    "Europe/Kiev": "Ukraine",
    "Asia/Dubai": "UAE",
    "Asia/Riyadh": "Saudi Arabia",
    "Asia/Qatar": "Qatar",
    "Asia/Kuwait": "Kuwait",
    "Asia/Bahrain": "Bahrain",
    "Asia/Muscat": "Oman",
    "Asia/Tehran": "Iran",
    "Asia/Jerusalem": "Israel",
    "Asia/Karachi": "Pakistan",
    "Asia/Kolkata": "India",
    "Asia/Calcutta": "India",
    "Asia/Dhaka": "Bangladesh",
    "Asia/Colombo": "Sri Lanka",
    "Asia/Kathmandu": "Nepal",
    "Asia/Bangkok": "Thailand",
    "Asia/Ho_Chi_Minh": "Vietnam",
    "Asia/Jakarta": "Indonesia",
    "Asia/Singapore": "Singapore",
    "Asia/Kuala_Lumpur": "Malaysia",
    "Asia/Manila": "Philippines",
    "Asia/Hong_Kong": "Hong Kong",
    "Asia/Shanghai": "China",
    "Asia/Taipei": "Taiwan",
    "Asia/Seoul": "South Korea",
    "Asia/Tokyo": "Japan",
    "Australia/Sydney": "Australia",
    "Australia/Melbourne": "Australia",
    "Australia/Brisbane": "Australia",
    "Australia/Perth": "Australia",
    "Pacific/Auckland": "New Zealand",
    "Pacific/Fiji": "Fiji",
    "Africa/Tunis": "Tunisia",
    "Africa/Algiers": "Algeria",
    "Africa/Luanda": "Angola",
    "Africa/Dar_es_Salaam": "Tanzania",
    "Africa/Kampala": "Uganda",
    "Africa/Kinshasa": "DR Congo",
    "Africa/Lubumbashi": "DR Congo",
    "Africa/Abidjan": "Ivory Coast",
    "Africa/Dakar": "Senegal",
    "Africa/Bamako": "Mali",
    "Africa/Ouagadougou": "Burkina Faso",
    "Africa/Niamey": "Niger",
    "Africa/Conakry": "Guinea",
    "Africa/Freetown": "Sierra Leone",
    "Africa/Monrovia": "Liberia",
    "Africa/Libreville": "Gabon",
    "Africa/Brazzaville": "Congo",
    "Africa/Malabo": "Equatorial Guinea",
    "Africa/Sao_Tome": "Sao Tome and Principe",
    "Africa/Bujumbura": "Burundi",
    "Africa/Kigali": "Rwanda",
    "Africa/Lusaka": "Zambia",
    "Africa/Harare": "Zimbabwe",
    "Africa/Maputo": "Mozambique",
    "Africa/Blantyre": "Malawi",
    "Africa/Windhoek": "Namibia",
    "Africa/Gaborone": "Botswana",
    "Africa/Maseru": "Lesotho",
    "Africa/Mbabane": "Eswatini",
    "Africa/Asmara": "Eritrea",
    "Africa/Djibouti": "Djibouti",
    "Africa/Mogadishu": "Somalia",
    "Africa/Juba": "South Sudan",
    "Africa/Khartoum": "Sudan",
    "Africa/Ceuta": "Spain",
    "Africa/El_Aaiun": "Western Sahara"
  };

  return map[tz] || tz.replace(/_/g, " ").split("/").pop() || "Unknown";
}
