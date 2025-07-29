import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
  Repo,
  WebSocketClientAdapter,
  IndexedDBStorageAdapter,
  isValidAutomergeUrl,
  DocHandle,
} from "@automerge/react";

const repo = new Repo({
  network: [new WebSocketClientAdapter("wss://sync.automerge.org")],
  storage: new IndexedDBStorageAdapter(),
});

// Add the repo to the global window object so it can be accessed in the browser console
// This is useful for debugging and testing purposes.
declare global {
  interface Window {
    repo: Repo;
    handle: DocHandle<any>;
  }
}

window.repo = repo;

// Check the URL for a document to load
const locationHash = document.location.hash.substring(1);
// Defpending if we have an AutomergeUrl, either find or create the document
if (isValidAutomergeUrl(locationHash)) {
  window.handle = await repo.find(locationHash);
} else {
  // TODO: UPDATE
  window.handle = repo.create<any>({ foo: "bar" });
  // Set the location hash to the new document we just made
  document.location.hash = window.handle.url;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
