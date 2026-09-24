# Website delivery workflow

The owner has requested that all refined website updates are pushed to the business's GitHub repository, as well as published to Cloudflare. After changes, rebuild the site, run the appropriate checks, and push the completed source and tracked output to the confirmed GitHub repository. Report push and deployment outcomes separately; a local commit or Cloudflare deployment does not mean GitHub is up to date.

The confirmed GitHub destination is https://github.com/connorgrandison/Grandison-website, using the `main` branch. Push completed updates there after verification. Preserve remote changes and never force-push without explicit authorization. The former Sites source repository is not the destination.

Production hosting is Cloudflare Workers (`grandison-plumbing-heating`) at https://grandisonplumbingandheating.co.uk. The former `.openai/hosting.json` describes an older preview, not the current production hosting.

Contact details are maintained in `src/contact.json`. Do not reintroduce third-party marketplace links or customer quotes removed at the owner's request.
