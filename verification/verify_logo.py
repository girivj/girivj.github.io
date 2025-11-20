from playwright.sync_api import sync_playwright

def verify_logo():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:8080")
            page.wait_for_selector(".logo")
            # Take a screenshot of the header area
            header = page.locator("header")
            header.screenshot(path="verification/logo_verification.png")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_logo()
