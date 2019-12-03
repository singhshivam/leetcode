# Debouncing
Debouncing is a way of forcing a function to wait a certain period of time before running again.

# Why?
Functions like Parallax and autocomplete and wired to trigger on events that occurs frequently. One might argue that autocomplete is still manageable, however, in the case of scrolling these triggers would be off the roof.

The high trigger rate can crush your app like no other thing. We therefore need to control it (or rate limit) using techniques like debouncing or throttling.

# Throttling
Throttling is similar to rate limiting. You tell the app to execute a function every `x` seconds. For example, on scroll event, log view port every 10 seconds.

# Debouncing Vs Throttling
While a throttled function will execute every `x` seconds, a debounced function will wait for `x` seconds between triggers to execute.
In case of an autocomplete input box:
-	debouncing: if there is a pause of 2 seconds between two key strokes, fetch suggestions
- throtelling: fetch suggestions every 2 seconds while the user is typing.

# When to use what?
Using one over the other largely depends on situations at hand. Here are a few good use cases of both:
## Debouncing
Autocomplete: users genreally take pause between words and are more focused on keystrokes while typing. Debouncing makes more sense here.

## Throttling
Shooting game: depending on the type of gun the player has, we want to throttle the shots fired. For example, for an automatic rifle you might be able to shoot every 1 sec, but for a sniper rifle you need to wait 10secs between two shots.

# Note
A debounced function may starve, but a throttled function would never.
