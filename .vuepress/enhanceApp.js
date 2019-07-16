import CoolAnalytics from '@coollabsio/analytics'

const analytics = new CoolAnalytics({
    key: '1234123412341234',
    type: 'frontend'
})
export default ({
    router,
  }) => {
    router.afterEach((to) => {
        analytics.log({
            nextPage: to.fullPath
        })
      })
  }
  