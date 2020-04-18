function doGet(e){
  
  Logger.log(e);
  return HtmlService.createHtmlOutputFromFile('principal')

}


function userClicked(er){
  var url = "https://docs.google.com/spreadsheets/d/1FXiWLBOD_ZxPWd_xzd-xqwVSnk3e5GuS56LQnuBONKA/edit#gid=1747036786";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  
  ws.appendRow([er.we,er.wee,er.app,er.weee,new Date()]);

  Logger.log(name + " Clicked the bottom");
  }
