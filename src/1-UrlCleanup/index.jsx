import urls from "./urls";
import cleanupUrl from "./cleanupUrl";
import React from "react";

export default function UrlCleanup() {
  return (
    <div>
      <h2>#1 Удаление повторяющихся слэшей </h2>
      <tt>
        {urls.map((url) => (
          <React.Fragment key={url}>
            Input: {url}
            <br />
            Output: {cleanupUrl(url)}
            <br />
            <br />
          </React.Fragment>
        ))}
      </tt>
    </div>
  );
}
