import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function getAllAnnouncements() {
  return window.contract.getAnnouncements();
}

export function likeAnc(uid) {
  return window.contract.like(uid, GAS, parseNearAmount(0.0001 + ""));
}

export function dislikeAnc(uid) {
  return window.contract.dislike(uid, GAS, parseNearAmount(0.0001 + ""));
}

export function deleteAnc(uid) {
  return window.contract.deleteAnnouncement(uid);
}

export function createAnnouncement(data) {
  return window.contract.createAnnouncement(
    data,
    GAS,
    parseNearAmount(0.52 + "")
  );
}
