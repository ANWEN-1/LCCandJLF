# LCCandJLF

这个是网站测试

photos.json
[
  {
    "filename": "1.jpg",
    "desc": "我是普通照片，默认居中剪裁",
    "layout": "wide"
  },
  {
    "filename": "2.jpg",
    "desc": "这是一张竖图，我想显示它的最上面（头部）",
    "position": "top"
  },
  {
    "filename": "3.jpg",
    "desc": "我想显示这张图的底部",
    "position": "bottom"
  },
  {
    "filename": "4.jpg",
    "desc": "我想对齐右上角",
    "layout": "large",
    "position": "right top"
  },
  {
    "filename": "5.jpg",
    "desc": "高级玩法：我想把焦点对准水平 80%，垂直 20% 的地方",
    "position": "80% 20%"
  }
]

models.json
[
    {
        "src": "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
        "name": "太空宇航员",
        "desc": "Google 提供的示例模型"
    },
    {
        "src": "models/robot.glb",
        "name": "我的机器人",
        "desc": "这是我自己做的第一个 Blender 模型"
    },
    {
        "src": "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
        "name": "尼尔·阿姆斯特朗",
        "desc": "登月第一人"
    }
]