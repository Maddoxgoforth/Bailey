# VSL Script — Hero Video

For the `VideoSlot` in `src/components/sections/Hero.tsx`. Written to run
~2:30 at a natural pace (safely under the 3-minute target). Landscape
16:9, Bailey talking straight to camera.

Broad hook first (works on anyone who's ever wanted access to a creator
they follow), narrows to Bailey specifically, sells the two things her
audience actually wants — weekly personal access and her recipes — then
handles the two objections most likely to stop someone from joining:
*"is that actually going to be her replying?"* and *"is $5/month actually
worth it?"*

---

**[0:00–0:15] — THE HOOK (broad)**

> If you've ever followed someone online, watched everything they post,
> and thought — *"I wish I could actually talk to this person, not just
> watch them"* — give me two minutes. I built exactly that, and it's more
> affordable than you'd think.

**[0:15–0:30] — WHO THIS IS**

> Hey, I'm Bailey. If you've followed me a while, you know two things —
> I love talking to you guys more than almost anything, and I love
> cooking. So I built one thing that finally gives you both, instead of
> just watching from the outside.

**[0:30–1:00] — WEEKLY ACCESS (lead benefit, more detail)**

> Every single week, I go live inside the community. It's not a webinar,
> not a script — it's just us talking. Bring anything: what's going on
> with you, the real story behind something I posted, or a recipe
> question if you've got one. I answer live, in real time. No topic's off
> limits, and there's no dumb question.

**[1:00–1:30] — THE RECIPES (second benefit, more detail)**

> On top of that — because so many of you ask for this — you get every
> one of my personal recipes. Over a hundred of them. Not stock recipes
> from some cookbook, the actual ones I cook every week, broken down so
> simply that even if you've never really cooked, you can follow along.
> And I keep adding more, so it only grows the longer you stay.

**[1:30–1:45] — COMMUNITY / PROOF IT'S REAL**

> It's a real, alive community too — not me talking into a void. You
> post, I see it, I reply. Actually me. Not an assistant, not a bot.

**[1:45–2:10] — OBJECTION #1: "IS THIS REALLY GOING TO BE HER?"**

> Now, some of you are thinking, *"yeah right, it's probably an assistant
> answering for her."* Fair — that's how it usually works with most
> people online. But that's exactly why I built this. Every single week,
> live, it's me. No middleman. You'll see it for yourself the first week
> you're in.

**[2:10–2:30] — OBJECTION #2: "IS $5/MONTH ACTUALLY WORTH IT?"**

> And if you're wondering whether $5 a month is actually worth it — you
> can cancel anytime, no contract. It's less than one coffee. For that,
> you get me every week, plus a recipe collection that keeps growing and
> keeps paying you back.

**[2:30–2:45] — CTA**

> So if you've ever wanted to actually be in my world instead of just
> watching it from the outside — this is it. Hit the button below, join
> now, and I'll see you on the call this week.

---

## Notes for filming

- Talk straight to camera the whole time — no B-roll needed to keep this
  simple; a few recipe/cooking cutaways over the 1:00–1:30 section are
  optional, not required.
- The two objection beats (1:45–2:30) land best delivered a little more
  direct/lower-energy than the rest — it should feel like she's calling
  out what you're actually thinking, not still pitching.
- Once filmed and hosted (Wistia/YouTube/Loom), pass the embed URL to
  `VideoSlot` in `Hero.tsx` via its `embedUrl` prop — no other changes
  needed.
