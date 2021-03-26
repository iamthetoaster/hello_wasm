use wasm_bindgen::prelude::*;
use web_sys::{WebGlProgram, WebGlRenderingContext, WebGlShader};
use super::shader::*;

pub struct FlatMesh {
    shader_program: Shader, 

    vertices: Vec<f32>,
    indices: Vec<usize>,
}

impl FlatMesh {
    pub fn arrow(gl: &WebGlRenderingContext) -> Self {
        let shader = Shader::new(
            &gl,
            include_str!("../res/vert2d.glsl"),
            include_str!("../res/frag.glsl")
        ).unwrap();

        FlatMesh {
            shader_program: shader,
            vertices: vec![0.5, 0.3, 0.8, 0.0, 0.9, 0.9, 0.0, 0.8, 0.3, 0.5, -0.8, -0.4, -0.4, -0.8],
            indices: vec![3, 1, 2, 4, 6, 0, 4, 5, 6,],
        }
    }

    pub fn render(&self) {

    }
}
