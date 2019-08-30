import CoolAnalytics from '@coollabsio/analytics'

export default ({ router }) => {
    const analytics = new CoolAnalytics({
        key: '26a1b2c0-903d-4891-ba9c-6142f72fd692',
        type: 'frontend'
    })

    router.afterEach((to) => { analytics.log({ nextPage: to.fullPath }) })
}
