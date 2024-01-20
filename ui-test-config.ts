import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/pageManager'

export type TestOptions = {
    openBaseUIUrl: string
    pageManager: PageManager
}

export const test = base.extend<TestOptions>({

    openBaseUIUrl: async({page}, use) => {
        await page.goto(`${process.env.UI_BASE_URL}`)
        await use('')
    },

    pageManager: async({page, openBaseUIUrl}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})