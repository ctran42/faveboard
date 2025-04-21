import requests
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(options=options)
headers = {
    "User-Agent": "Mozilla/5.0"
}
sitemap_index_url = 'https://anilist.co/sitemap/index.xml'
wanted_keywords = ['anime-', 'manga-', 'characters-']

# Step 1: Get list of needed sitemaps
def get_filtered_sitemaps(index_url):
    # Gets sitemap content
    resp = requests.get(index_url)
    tree = ET.fromstring(resp.content)
    sitemaps = []
    for sitemap in tree.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}sitemap'):
        loc = sitemap.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
        if any(keyword in loc for keyword in wanted_keywords):
            sitemaps.append(loc)

    return sitemaps

# Step 2: Get page URLs from each sitemap
def get_page_urls(sitemap_url):
    counter = 0
    resp = requests.get(sitemap_url)
    tree = ET.fromstring(resp.content)
    urls = []
    for url in tree.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
        loc = url.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
        urls.append(loc)
        # print(loc)
        counter += 1
        if counter == 10:
            break
    
    return urls

def scrape_title_and_image(url):
    driver.get(url)
    time.sleep(3)  # let JS load

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    # Title
    title_tag = soup.find('h1')
    title = title_tag.text.strip() if title_tag else 'N/A'

    # Image
    img_tag = soup.find('img', class_='cover')
    image_url = img_tag['src'] if img_tag else 'N/A'

    return title, image_url

all_results = []

sitemaps = get_filtered_sitemaps(sitemap_index_url)
for sitemap_url in sitemaps:
    print("sitemap:" + sitemap_url)
    urls = get_page_urls(sitemap_url)
    for url in urls[:5]:
        result = scrape_title_and_image(url)
        all_results.append(result)
        print(f"[✓] {result['title']} → {result['image']}")

driver.quit()