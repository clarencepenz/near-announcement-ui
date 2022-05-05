import { VMContext } from "near-mock-vm";
import { u128 } from "near-sdk-core";
import { TxFee } from "../../utils";
import {  getAnnouncement, createAnnouncement, like, dislike } from "../assembly";
import { announcementIds } from "../assembly/model";

const announcer = "ogenienis.testnet";

describe("Checks for creating account", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(announcer);
  });

  it("creates an announcement", () => {
    const text = "MilkyWay Galaxy arrives today";
    const response = createAnnouncement(text);

    expect(response).toBe("📢 " + announcer + " made an announcement");
    
    expect(announcementIds.length).toBeGreaterThan(0, "A new announcement exists with the uid: " + announcementIds[0]);

  });

  it("Smart contract panics when transaction fee is not attached", () => {
    VMContext.setAttached_deposit(u128.Zero);
    function createAnnouncementWithZeroDeposit(): void {
      createAnnouncement("MilkyWay Galaxy arrives today");
    }

    expect(createAnnouncementWithZeroDeposit).toThrow(
      "Attached deposit is expected to be equal to: " + TxFee.toString() + " Yocto"
    );
  });
});


describe("View a single Announcement", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(announcer);

    const text = "MilkyWay Galaxy arrives today";
    createAnnouncement(text);
  });

  it("Returns a single announcement", () => {
    const announcement = getAnnouncement(announcementIds[0]);

    expect(announcement.uid).toStrictEqual(announcementIds[0], "The uniqueId on the returned candy is equal to the id: " + announcementIds[0])
  });

  it("Smart contract panics when there's no Announcement with such ID", () => {
    function getUnknownItem(): void {
      getAnnouncement("ANC-0000001");
    }
    expect(getUnknownItem).toThrow("This Announcement doesn't exist")
  })

})

describe("To like on a single Announcement", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(announcer);

    const text = "MilkyWay Galaxy arrives today";
    createAnnouncement(text);
  });

  it("likes on a single announcement and returns a response", () => {
    const response = like(announcementIds[0]);
    expect(response).toBe('Your like on ' + announcementIds[0] + ' was successfull');
  });

  it("Smart contract panics when there's no Announcement with such ID", () => {
    function likeUnknownItem(): void {
      like("ANC-0000001");
    }
    expect(likeUnknownItem).toThrow("This Announcement doesn't exist")
  })

})

describe("To dislike on a single Announcement", () => {
  beforeEach(() => {
    VMContext.setAttached_deposit(TxFee);
    VMContext.setSigner_account_id(announcer);

    const text = "MilkyWay Galaxy arrives today";
    createAnnouncement(text);
  });

  it("dislikes on a single announcement and returns a response", () => {
    const response = dislike(announcementIds[0]);
    expect(response).toBe('Your dislike on ' + announcementIds[0] + ' was successfull');
  });

  it("Smart contract panics when there's no Announcement with such ID", () => {
    function likeUnknownItem(): void {
      like("ANC-0000001");
    }
    expect(likeUnknownItem).toThrow("This Announcement doesn't exist")
  })

})