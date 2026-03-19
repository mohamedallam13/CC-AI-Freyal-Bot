const { Toolkit } = CCLIBRARIES;

function captureUserAgent(userAgent) {
  console.log(userAgent)
  const timestamp = new Date();
  const USERAGENTS_FILE_ID = "1oRycGVbnsxzl3y_UuIVCUc99_-oKV1XH"
  const data = Toolkit.readFromJSON(USERAGENTS_FILE_ID);
  data.push([timestamp, userAgent])
  Toolkit.writeToJSON(USERAGENTS_FILE_ID, data);
}