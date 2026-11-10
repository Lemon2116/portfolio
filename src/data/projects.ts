export interface Project {
	title: string;
	year: string;
	category: string;
	description: string;
	note?: string;
	url?: string;
	images?: string[];
	video?: string;
	mediaScale?: number;
	aspectRatio?: string;
	objectPosition?: string;
}

// Replace these placeholders with your own projects. Add or remove entries freely —
// the layout on the homepage adapts to however many you list here.
export const projects: Project[] = [
	{
		title: 'Shan Shui (山水): Real-Time Ink-Wash Landscape',
		year: '2026.10',
		category: 'Shader & Post Processing',
		description:
			'A real-time C++/OpenGL renderer that paints procedural mountains as a Chinese ink-wash landscape. Layered Perlin noise shapes the terrain on the GPU, and ink gathers on steep, shadowed slopes with noise-broken, brush-like edges.',
		note: 'Built on a C++/Qt OpenGL framework from course project, extended with my own terrain, ink, mist and post-processing shaders.',
		images: [
			'/media/images/project1_FBM.png',
			'/media/images/project1_Perlin1.png',
			'/media/images/project1_Perlin2.png',
		],
	},
	{
		title: 'Rasterizer and Reflection Models',
		year: '2026.10',
		category: 'Rasterizer',
		description:
			'Built a CPU software rasterizer in C++ that renders OBJ scenes with perspective-correct UV/normal interpolation, z-buffering, supersampled anti-aliasing, and tangent-space normal mapping, with switchable Lambert, Blinn-Phong, and toon shading and a wireframe mode.',
		images: [
			'/media/images/project2_lambert.png',
			'/media/images/project2_Blinn.png',
			'/media/images/project2_toon.png',
			'/media/images/project2_wireframe.png',
		],
		// Images are 1:1 while project one's are 4:3; scale down so the displayed
		// height matches project one's image height instead of looking oversized.
		mediaScale: 0.75,
	},
	{
		title: 'Viewing Snow from the Mid-Lake Pavilion (湖心亭看雪)',
		year: '2026.11',
		category: 'Modeling & Lighting',
		description:
			'A Maya environment study inspired by Zhang Dai’s classical Chinese essay of the same name, built around a hero lakeside pavilion and staged across a far shot of mountain and water and a near shot of the tea set waiting inside.',
		images: [
			'/media/images/project3_far.jpg',
			'/media/images/project3_near.jpg',
			'/media/images/project3_pavilion.jpg',
		],
		// Source renders are 16:9; crop to project one's 4:3 so the displayed
		// height matches instead of looking shorter than the other galleries.
		aspectRatio: '4 / 3',
		objectPosition: '65% center',
	},
];
