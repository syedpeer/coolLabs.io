import CoolAnalytics from '@coollabsio/analytics'

export default ({ router }) => {
    const analytics = new CoolAnalytics({
        key: '1234123412341234',
        type: 'frontend'
    })

    router.afterEach((to) => { analytics.log({ nextPage: to.fullPath }) })
}
