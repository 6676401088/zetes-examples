uniform sampler2D uni_texture;

in vec2 textureCoords;
in vec4 vertex;
in vec3 normal;

out vec4 color;

void main()
{
    vec4 tex = texture(uni_texture, textureCoords);
    
    color = vec4(tex.r, tex.g, tex.b, tex.a);
}
