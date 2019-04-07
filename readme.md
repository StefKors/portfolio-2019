# how to deploy

1) run `npm run build`
2) run `npm run export`
3) run `cd out`
4) run `now`
5) run `now alias`

as a oneliner `npm run build && npm run export && cd out && now && now alias`

put this in `./out/now.json`
```
{
  "name": "site",
  "version": 2,
  "alias": ["www.stefkors.com", "stefkors.com"]
}
```



https://github.com/react-spring/react-spring
http://editions.jordansowers.com/bloom




This project is build up with functional components.

example data for page
```JavaScript
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
```