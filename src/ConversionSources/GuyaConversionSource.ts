import { AbstractConversionSource } from "./AbstractConversionSource"

export class GuyaConversionSource extends AbstractConversionSource {

    static tachiyomiSourceId: string = "4637971935551651734"     // Tachiyomi calls Mangadex this value
    tachiyomiSourceName: string = "Guya"           // A user friendly identifier for this tachiyomi source
    paperbackSourceName: string = "Guya"           // In this case, the source ID in Paperback is also Mangadex!

    parseMangaId(tachiyomiId: string) {
        var cutVal = tachiyomiId.replace('/manga/', '')
        return cutVal
    }

    parseChapterId(tachiyomiId: string): string {
        // /api/chapter/1105111 is an example of something we might see. 
        return tachiyomiId.match(/.+\/(\d+)\//)[1]
    }

}