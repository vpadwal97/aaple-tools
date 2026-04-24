type DiffPart = {
  type: "added" | "removed" | "same";
  value: string;
};

export function compareText(text1: string, text2: string): DiffPart[] {
  const words1 = text1.trim().split(/\s+/);
  const words2 = text2.trim().split(/\s+/);

  const m = words1.length;
  const n = words2.length;

  // LCS table
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  // Build LCS table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (words1[i - 1] === words2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const result: DiffPart[] = [];

  // Backtrack to build diff
  let i = m;
  let j = n;

  while (i > 0 && j > 0) {
    if (words1[i - 1] === words2[j - 1]) {
      result.unshift({
        type: "same",
        value: words1[i - 1],
      });
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      // strictly greater (fix)
      result.unshift({
        type: "removed",
        value: words1[i - 1],
      });
      i--;
    } else {
      result.unshift({
        type: "added",
        value: words2[j - 1],
      });
      j--;
    }
  }

  // Remaining words in text1
  while (i > 0) {
    result.unshift({
      type: "removed",
      value: words1[i - 1],
    });
    i--;
  }

  // Remaining words in text2
  while (j > 0) {
    result.unshift({
      type: "added",
      value: words2[j - 1],
    });
    j--;
  }

  return mergeDiffs(result);
}

// Optional: merge consecutive parts for cleaner output
function mergeDiffs(parts: DiffPart[]): DiffPart[] {
  const merged: DiffPart[] = [];

  for (const part of parts) {
    const last = merged[merged.length - 1];

    if (last && last.type === part.type) {
      last.value += " " + part.value;
    } else {
      merged.push({ ...part });
    }
  }

  return merged;
}
