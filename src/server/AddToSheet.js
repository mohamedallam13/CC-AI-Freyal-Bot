(function (root, factory) {
  root.SHEETS_INTEGRATION = factory();
})(this, function () {

  const { imp, SHEETS } = CCLIBRARIES;
  const { createSpreadsheetManager } = imp;
  const { createWriteArr, writeToSheet } = SHEETS;

  const ssid = "1mx-W51Bmij4fsFPGnWYLS-TuyIJBHq2bWr7RcTuV888";
  const sheetName = "Responses";
  const parseObj = {
    headerRow: 1
  }

  function sendToSheets(answers) {
    const ssMan = createSpreadsheetManager(ssid).addSheets(sheetName);
    const sheetObj = ssMan.sheets[sheetName].parseSheet(parseObj).objectifyValues();
    const { header, lastRow } = sheetObj
    // const serialNumber = getSN(lastRow)
    answers.timestamp = new Date();
    // answers.sn = serialNumber;
    const writeArr = createWriteArr([answers], header);
    writeToSheet(writeArr, sheetObj);
    return true;
  }

  function getSN(lastRow) {
    const serialNumber = parseInt(lastRow) + 190000;
    return serialNumber;
  }

  return {
    sendToSheets
  };
});

function sendToSheets(answers) {
  //TEST
  // answers = {
  //   timestamp: new Date(),
  //   mood: "Sad",
  //   gender: "Male",
  //   age: "34",
  //   email: "n@n.com",
  //   location: "Greater Cairo",
  //   confession: "Yes, it is me again"
  // }
  return SHEETS_INTEGRATION.sendToSheets(answers)
}