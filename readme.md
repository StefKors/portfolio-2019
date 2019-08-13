built with next.js

Todo: find a non hacky way to do pictures and data

# how to deploy
1) run `npm run build`
2) run `npm run export`
3) run `cd out`
4) run `now`
5) run `now alias`

deploy with now, not great?
put this in `./out/now.json`
```
{
  "name": "site",
  "version": 2,
  "alias": ["www.stefkors.com", "stefkors.com"]
}
```

https://github.com/react-spring/react-spring

test workflow
