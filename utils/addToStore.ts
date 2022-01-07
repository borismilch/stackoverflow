import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { v4 as uuid } from 'uuid'
import { storage } from "../firebase"

 export const addFileToStorageAndGetUrl = async (data_url: string, path: string) => {
    const id = uuid()

    const imageRef = ref(storage, `${path}/` + id)

    await uploadString(imageRef, data_url, 'data_url')

    const downloadUrl = await getDownloadURL(imageRef)

    return downloadUrl
  }