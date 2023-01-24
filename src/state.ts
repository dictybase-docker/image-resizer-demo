import { atom } from "jotai"

const fileAtom = atom<File | null>(null)
export default fileAtom
