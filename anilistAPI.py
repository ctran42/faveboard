import requests

def search_media(query, media_type):
    url = 'https://graphql.anilist.co'
    graphql_query = '''
    query ($search: String, $media: MediaType) {
      Page(perPage: 10) {
        media(search: $search, type: $media) {
          id
          title {
            romaji
          }
          coverImage {
            large
          }
        }
      }
    }
    '''

    variables = {
        'search': query,
        'media': media_type  # e.g. "ANIME" or "MANGA"
    }

    response = requests.post(url, json={'query': graphql_query, 'variables': variables})
    data = response.json()

    results = []
    for media in data['data']['Page']['media']:
        results.append({
            'title': media['title']['romaji'],
            'image': media['coverImage']['large']
        })

    return results

# Example
results = search_media("attack", "MANGA")
for entry in results:
    print(entry)