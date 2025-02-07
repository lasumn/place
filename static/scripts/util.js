/**
 * @param {HTMLCanvasElement} canvas
 */
export async function setCanvasSize(canvas) {
    /**
     * @type {number[]}
     */
    const cellsDim = await (await fetch('/_cells/dim')).json();
    canvas.width = cellsDim[0];
    canvas.height = cellsDim[1];
}

/**
 * @type {HTMLDivElement}
 */
export const mover = /** @type {HTMLDivElement} */ (
    document.getElementById('_canvas_move')
);

/**
 * @type {HTMLDivElement}
 */
export const zoomer = /** @type {HTMLDivElement} */ (
    document.getElementById('_canvas_zoom')
);

/**
 * @type {HTMLCanvasElement}
 */
export const canvas = /** @type {HTMLCanvasElement} */ (
    document.getElementById('_canvas_cell')
);
