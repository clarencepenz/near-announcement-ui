#!/usr/bin/env bash
near call $CONTRACT createAnnouncement --account_id $OWNER '{"text": "Raging mary is here to stay"}' --amount 0.52

# near deploy --accountId=ogenienis.testnet --wasmFile=build/release/announcement.wasm
