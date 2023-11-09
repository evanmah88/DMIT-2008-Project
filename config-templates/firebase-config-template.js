import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import serviceKey from "@/config/serviceKey" 
 
 
 
 if(!getApps().length){
  initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: "YOUR REAL TIME DATA BASE URL HERE",
    databaseAuthVariableOverride: {
      uid: "your service name"
    }
  });
 }

// app/api/test/route.js
const db = admin.database()
 
export {db}
 