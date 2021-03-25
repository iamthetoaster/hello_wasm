import * as wasm from './hello_wasm_bg.wasm';

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function main() {
    wasm.main();
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    var ret = wasm.add(a, b);
    return ret >>> 0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

export const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

export const __wbg_instanceof_Window_5993230e7331f098 = function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    return ret;
};

export const __wbg_document_85584f745133c6ad = function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_body_3a554c5c0c4ddc09 = function(arg0) {
    var ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

export const __wbg_createElement_9291c0306f179f1e = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

export const __wbg_setinnerHTML_fbaa20055a3b9e5c = function(arg0, arg1, arg2) {
    getObject(arg0).innerHTML = getStringFromWasm0(arg1, arg2);
};

export const __wbg_appendChild_57f30a01b30ec33c = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
});

export const __wbg_call_e5847d15cc228e4f = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

export const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

export const __wbg_newnoargs_2349ba6aefe72376 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

export const __wbg_self_35a0fda3eb965abe = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

export const __wbg_window_88a6f88dd3a474f1 = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

export const __wbg_globalThis_1d843c4ad7b6a1f5 = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

export const __wbg_global_294ce70448e8fbbf = handleError(function() {
    var ret = global.global;
    return addHeapObject(ret);
});

export const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export const __wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

