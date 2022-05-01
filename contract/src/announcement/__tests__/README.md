## Unit tests

Unit tests can be run from the top level folder using the following command:

```
yarn test:unit
```

### Tests for Contract in `index.unit.spec.ts`


```
[Describe]: Checks for creating account

 [Success]: ✔ creates an announcement
 [Success]: ✔ Smart contract panics when transaction fee is not attached

[Describe]: View a single Announcement

 [Success]: ✔ Returns a single announcement
 [Success]: ✔ Smart contract panics when there's no Announcement with such ID

[Describe]: Delete a single Announcement

 [Success]: ✔ Deletes a single announcement and returns a response
 [Success]: ✔ Smart contract panics when there's no Announcement with such ID

[Describe]: To like on a single Announcement

 [Success]: ✔ likes on a single announcement and returns a response
 [Success]: ✔ Smart contract panics when there's no Announcement with such ID

[Describe]: To dislike on a single Announcement

 [Success]: ✔ dislikes on a single announcement and returns a response
 [Success]: ✔ Smart contract panics when there's no Announcement with such ID

    [File]: src/announcement/__tests__/index.unit.spec.ts
  [Groups]: 6 pass, 6 total
  [Result]: ✔ PASS
[Snapshot]: 0 total, 0 added, 0 removed, 0 different
 [Summary]: 10 pass,  0 fail, 10 total
    [Time]: 73.949ms

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  [Result]: ✔ PASS
   [Files]: 1 total
  [Groups]: 6 count, 6 pass
   [Tests]: 10 pass, 0 fail, 10 total
    [Time]: 11912.998ms
    
Done in 12.37s.
```
