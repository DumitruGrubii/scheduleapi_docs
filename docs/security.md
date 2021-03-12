---
id: security
title: Security
sidebar_label: Security
slug: security
---

:::important

You should check that the request is made by us!

:::

Each workspace has a unique token that will be sent in the header of the request. Please check that the token sent is the one you expect to receive.

## Code examples

### Javascript

```js
// save the token somewhere safe, like the environment variables
const verificationToken = process.env.SCHEDULEAPI_TOKEN;
// Scheduleapi token is sent in the header
const sentToken = req.headers["scheduleapi-signature"];
// you have to check that they match
const tokensMatch = verificationToken === sentToken;
if (!tokensMatch) throw new Error("unauthorized");
```

---
