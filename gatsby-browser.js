// https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Denne app er blevet opdateret. ` +
      `Genindlæs for at se den nyeste version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
