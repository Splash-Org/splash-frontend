import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { VideoUploaded } from "../generated/VideoContract/VideoContract"

export function createVideoUploadedEvent(
  id: BigInt,
  hashNum: string,
  title: string,
  description: string,
  thumbnailHash: string,
  date: string,
  author: Address
): VideoUploaded {
  let videoUploadedEvent = changetype<VideoUploaded>(newMockEvent())

  videoUploadedEvent.parameters = new Array()

  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("hashNum", ethereum.Value.fromString(hashNum))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "thumbnailHash",
      ethereum.Value.fromString(thumbnailHash)
    )
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  videoUploadedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return videoUploadedEvent
}
