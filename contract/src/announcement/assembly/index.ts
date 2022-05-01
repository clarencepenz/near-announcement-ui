import { Context, u128 } from "near-sdk-as";
import {
  Announcement,
  announcement,
  announcementIds,
  announcer,
} from "./model";
import { AccountId, announcementID, TxFee } from "../../utils";

export function createAnnouncement(text: string): string {
  const deposit = Context.attachedDeposit;
  verifyShopTxFee(deposit);

  const aid = generateuniqueID() as AccountId;

  const announce = new Announcement(text, Context.sender, aid);

  announcement.set(aid, announce);
  updateAnnouncer(Context.sender);
  announcementIds.push(aid);

  return "📢 " + Context.sender + " made an announcement";
}

export function getAnnouncement(uid: announcementID): Announcement {
  assert(announcement.contains(uid), "This Announcement doesn't exist");
  const announce = announcement.get(uid) as Announcement;

  return announce;
}

export function getAnnouncements(): Announcement[] {
  const allAnnouncements: Announcement[] = [];
  for (let x = 0; x < announcementIds.length; x++) {
    const item = announcement.get(announcementIds[x]) as Announcement;
    allAnnouncements.push(item);
  }
  return allAnnouncements;
}

export function deleteAnnouncement(uid: announcementID): string {
  assert(
    announcement.contains(uid),
    "This Announcement doesn't currently exist"
  );
  announcement.delete(uid);

  return "⚠️ " + uid + " Announcement Deleted";
}

export function like(uid: announcementID): string {
  let impression = announcement.getSome(uid);

  if (impression.dislike.includes(Context.sender)) {
    let id = impression.dislike.findIndex((data) => data == Context.sender);
    if (id != -1) {
      impression.dislike.splice(id, 1);
    }
  }
  const opts = !impression.like.includes(Context.sender);

  assert(opts, "You have already liked this announcement");

  const opt = impression.likeAnnouncement();

  announcement.set(uid, opt);

  return "Your like on " + uid + " was successfull";
}

export function dislike(uid: announcementID): string {
  let impression = announcement.getSome(uid);

  if (impression.like.includes(Context.sender)) {
    let id = impression.like.findIndex((data) => data == Context.sender);
    if (id != -1) {
      impression.like.splice(id, 1);
    }
  }

  const opts = !impression.dislike.includes(Context.sender);

  assert(opts, "You have already disliked this announcement");

  const opt = impression.dislikeAnnouncement();

  announcement.set(uid, opt);

  return "Your dislike on " + uid + " was successfull";
}

function updateAnnouncer(announc: AccountId): void {
  for (let x = 0; x < announcer.length; x++) {
    if (announcer[x] != announc) {
      announcer.push(announc);
    }
  }
}

/**
 * generates a random ID
 * @returns announcementID
 */
function generateuniqueID(): announcementID {
  const id = "ANC-" + Context.blockTimestamp.toString();
  return id;
}

/**
 * A helper function to verify the NEAR provided is greater or equal to 0.52 NEAR
 * @param deposit
 */
function verifyShopTxFee(deposit: u128): void {
  assert(
    deposit >= TxFee,
    "You need to have at least 0.52 NEAR tokens to continue"
  );
}
