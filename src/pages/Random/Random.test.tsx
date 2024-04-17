import { it, expect, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Random from "./Random";

global.fetch = vi.fn();

function createFetchResponse(data: unknown) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("The Random Page", () => {
  it("displays the heading on load", () => {
    fetch.mockResolvedValue(createFetchResponse({ status: "error" }));

    render(<Random />);

    expect(screen.getByText("Random Dog")).not.toBeNull();

    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.queryByText("Fetch another")).toBeNull();
  });

  it("displays the image when returned", async () => {
    fetch.mockResolvedValue(
      createFetchResponse({ status: "success", message: "Url" })
    );
    render(<Random />);

    waitFor(() => {
      expect(screen.queryByRole("img")).not.toBeNull();
      expect(screen.queryByText("Fetch another")).not.toBeNull();
    });
  });
});
