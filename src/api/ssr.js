import puppeteer from "puppeteer";

export default async function handler(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).send("URL is required");

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle2" });

    const html = await page.content();
    await browser.close();

    res.setHeader("Content-Type", "text/html");
    res.send(html);
}
