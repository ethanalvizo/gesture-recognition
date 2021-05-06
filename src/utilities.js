export const drawHand = (predictions, ctx) => {
    if(predictions.length > 0) {
        predictions.forEach((prediction) => {
            const landmark = prediction.landmarks

            for (let i = 0; i<landmark.length; i++) {
                const x = landmark[i][0]
                const y = landmark[i][1]

                ctx.beginPath()
                ctx.arc(x, y, 5, 0, 3 * Math.PI)

                ctx.fillStyle='indigo'
                ctx.fill();
            }
        })
    }
}