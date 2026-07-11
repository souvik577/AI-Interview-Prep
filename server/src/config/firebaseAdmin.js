import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let app;

if (process.env.FIREBASE_PRIVATE_KEY) {
  // Production (Render)
  app = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
} else {
  // Local
  const { default: serviceAccount } = await import("../../serviceAccountKey.json", {
    with: { type: "json" },
  });

  app = initializeApp({
    credential: cert(serviceAccount),
  });
}

export const adminAuth = getAuth(app);