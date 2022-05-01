import { Context, PersistentMap, PersistentVector } from "near-sdk-core";
import { AccountId, announcementID } from "../../utils";

@nearBindgen
export class Announcement {
  uid: announcementID;
  text: string;
  announcer: AccountId;
  like: string[];
  dislike: string[];
  createdAt: u64;

  constructor(text: string, announcer: string, uid: announcementID) {
    this.text = text;
    this.uid = uid;
    this.announcer = announcer;
    this.like = [];
    this.dislike = [];
    this.createdAt = Context.blockTimestamp;
  }

  likeAnnouncement(): Announcement {
    this.like.push(Context.sender);
    return this;
  }

  dislikeAnnouncement(): Announcement {
    this.dislike.push(Context.sender);
    return this;
  }
}

export const announcement = new PersistentMap<announcementID, Announcement>(
  "a"
);
export const announcer = new PersistentVector<AccountId>("anu");
export const announcementIds = new PersistentVector<string>("id");
