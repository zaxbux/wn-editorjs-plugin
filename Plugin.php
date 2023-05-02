<?php

namespace ReaZzon\Editor;

use Backend, Event;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;
use ReaZzon\Editor\Classes\Event\ProcessMLFields;
use ReaZzon\Editor\Classes\Exceptions\PluginErrorException;
use System\Classes\PluginBase;

use ReaZzon\Editor\Classes\Event\ExtendRainLabBlog;
use ReaZzon\Editor\Classes\Event\ExtendRainLabStaticPages;
use ReaZzon\Editor\Classes\Event\ExtendIndicatorNews;
use ReaZzon\Editor\Classes\Event\ExtendLovataGoodNews;

/**
 * Editor Plugin Information File
 * @package ReaZzon\Editor
 * @author Nick Khaetsky, nick@reazzon.ru
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'reazzon.editor::lang.plugin.name',
            'description' => 'reazzon.editor::lang.plugin.description',
            'author'      => 'Nick Khaetsky',
            'icon'        => 'icon-pencil-square-o',
            'homepage'    => 'https://github.com/FlusherDock1/EditorJS'
        ];
    }

    /**
     *
     */
    public function register()
    {
        parent::register(); // TODO: Change the autogenerated stub

        $this->registerErrorHandler();
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array|void
     */
    public function boot()
    {
        parent::boot();

        Event::subscribe(ExtendRainLabBlog::class);
        Event::subscribe(ExtendRainLabStaticPages::class);
        Event::subscribe(ExtendLovataGoodNews::class);
        Event::subscribe(ExtendIndicatorNews::class);
        Event::subscribe(ProcessMLFields::class);
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return [
            'reazzon.editor.access_settings' => [
                'tab'   => 'reazzon.editor::lang.plugin.name',
                'label' => 'reazzon.editor::lang.permission.access_settings'
            ],
        ];
    }

    /**
     * Registers settings for this plugin
     *
     * @return array
     */
    public function registerSettings()
    {
        return [
            'settings' => [
                'label'       => 'reazzon.editor::lang.settings.menu_label',
                'description' => 'reazzon.editor::lang.settings.menu_description',
                'category'    => 'reazzon.editor::lang.plugin.name',
                'class'       => 'ReaZzon\Editor\Models\Settings',
                'permissions' => ['reazzon.editor.access_settings'],
                'icon'        => 'icon-cog',
                'order'       => 500,
            ]
        ];
    }

    /**
     * Registers formWidgets.
     *
     * @return array
     */
    public function registerFormWidgets()
    {
        return [
            'ReaZzon\Editor\FormWidgets\EditorJS' => 'editorjs',
            'ReaZzon\Editor\FormWidgets\MLEditorJS' => 'mleditorjs',
        ];
    }

    /**
     * Registering additional twig functions
     *
     * @return array
     */
    public function registerMarkupTags()
    {
        return [
            'filters' => [
                'convertBytes' => [$this, 'convertBytes'],
            ],
        ];
    }

    /**
     * Converts bytes to more sensible string
     *
     * @param int $bytes
     * @return string
     * @see \File::sizeToString($bytes);
     */
    public function convertBytes($bytes)
    {
        return \File::sizeToString($bytes);
    }

    /**
     * Registers additional blocks for EditorJS
     * @return array
     */
    public function registerEditorBlocks()
    {
        return [
            'paragraph' => [
                'validation' => [
                    'text' => [
                        'type' => 'string',
                        'allowedTags' => 'i,b,u,a[href],span[class],code[class],mark[class]'
                    ]
                ],
                'view' => 'reazzon.editor::blocks.paragraph'
            ],
            'header' => [
                'settings' => [
                    'class' => 'Header',
                    'shortcut' => 'CMD+SHIFT+H',
                ],
                'validation' => [
                    'text' => [
                        'type' => 'string',
                    ],
                    'level' => [
                        'type' => 'int',
                        'canBeOnly' => [1, 2, 3, 4, 5]
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/header.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.heading'
            ],
            'Marker' => [
                'settings' => [
                    'class' => 'Marker',
                    'shortcut' => 'CMD+SHIFT+M',
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/marker.umd.cjs',
                ]
            ],
            'image' => [
                'settings' => [
                    'class' => 'ImageTool',
                    'config' => [
                        'endpoints' => [
                            'byFile' => config('app.url') . '/editorjs/plugins/image/uploadFile',
                            'byUrl' => config('app.url') . '/editorjs/plugins/image/fetchUrl',
                        ]
                    ]
                ],
                'validation' => [
                    'file' => [
                        'type' => 'array',
                        'data' => [
                            'url' => [
                                'type' => 'string',
                            ],
                            'thumbnails' => [
                                'type' => 'array',
                                'required' => false,
                                'data' => [
                                    '-' => [
                                        'type' => 'string',
                                    ]
                                ],
                            ]
                        ],
                    ],
                    'caption' => [
                        'type' => 'string'
                    ],
                    'withBorder' => [
                        'type' => 'boolean'
                    ],
                    'withBackground' => [
                        'type' => 'boolean'
                    ],
                    'stretched' => [
                        'type' => 'boolean'
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/image.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.image'
            ],
            'attaches' => [
                'settings' => [
                    'class' => 'AttachesTool',
                    'config' => [
                        'endpoint' => config('app.url') . '/editorjs/plugins/attaches',
                    ]
                ],
                'validation' => [
                    'file' => [
                        'type' => 'array',
                        'data' => [
                            'url' => [
                                'type' => 'string',
                            ],
                            'size' => [
                                'type' => 'int',
                            ],
                            'name' => [
                                'type' => 'string',
                            ],
                            'extension' => [
                                'type' => 'string',
                            ],
                        ]
                    ],
                    'title' => [
                        'type' => 'string',
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/attaches.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.attaches'
            ],
            'mediamanager' => [
                'settings' => [
                    'class' => 'MediaManagerTool',
                    'config' => [],
                ],
                'validation' => [
                    'file' => [
                        'type' => 'array',
                        'data' => [
                            'url' => [
                                'type' => 'string',
                                'required' => true,
                            ],
                            'title' => [
                                'type' => 'string',
                                'required' => false,
                            ],
                            'documentType' => [
                                'type' => 'string',
                                'required' => true,
                            ],
                            'extension' => [
                                'type' => 'string',
                                'required' => false,
                            ],
                            'size' => [
                                'type' => 'int',
                                'required' => false,
                            ],
                            'lastModified' => [
                                'type' => 'int',
                                'required' => false,
                            ],
                            'folder' => [
                                'type' => 'string',
                                'required' => false,
                            ],
                            'path' => [
                                'type' => 'string',
                                'required' => false,
                            ],
                        ],
                    ],
                    'caption' => [
                        'type' => 'string',
                        'required' => false,
                    ],
                    'addBorder' => [
                        'type' => 'boolean',
                        'required' => false,
                    ],
                    'addBackground' => [
                        'type' => 'boolean',
                        'required' => false,
                    ],
                    'stretched' => [
                        'type' => 'boolean',
                        'required' => false,
                    ],
                    'attaches' => [
                        'type' => 'boolean',
                        'required' => false,
                    ],
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/assets/js/src/mediamanager/dist/mediamanager.umd.js',
                ],
                'view' => 'reazzon.editor::blocks.mediamanager',
            ],
            'linkTool' => [
                'settings' => [
                    'class' => 'LinkTool',
                    'config' => [
                        'endpoint' => '/editorjs/plugins/linktool',
                    ]
                ],
                'validation' => [
                    'link' => [
                        'type' => 'string'
                    ],
                    'meta' => [
                        'type' => 'array',
                        'data' => [
                            'title' => [
                                'type' => 'string',
                            ],
                            'description' => [
                                'type' => 'string',
                            ],
                            'image' => [
                                'type' => 'array',
                                'data' => [
                                    'url' => [
                                        'type' => 'string',
                                    ],
                                ]
                            ]
                        ]
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/link.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.link'
            ],
            'linkautocomplete' => [
                'settings' => [
                    'class' => 'LinkAutocomplete',
                    'config' => [
                        'endpoint' => '/editorjs/plugins/linkautocomplete',
                        'queryParam' => 'q',
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/linkautocomplete.umd.cjs',
                ],
            ],
            'list' => [
                'settings' => [
                    'class' => 'List',
                    'inlineToolbar' => true,
                ],
                'validation' => [
                    'style' => [
                        'type' => 'string',
                        'canBeOnly' =>
                        [
                            0 => 'ordered',
                            1 => 'unordered',
                        ],
                    ],
                    'items' => [
                        'type' => 'array',
                        'data' => [
                            '-' => [
                                'type' => 'string',
                                'allowedTags' => 'i,b,u',
                            ],
                        ],
                    ],
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/list.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.list'
            ],
            'checklist' => [
                'settings' => [
                    'class' => 'Checklist',
                    'inlineToolbar' => true,
                ],
                'validation' => [
                    'items' => [
                        'type' => 'array',
                        'data' => [
                            '-' => [
                                'type' => 'array',
                                'data' => [
                                    'text' => [
                                        'type' => 'string',
                                        'required' => false
                                    ],
                                    'checked' => [
                                        'type' => 'boolean',
                                        'required' => false
                                    ],
                                ],

                            ],
                        ],
                    ],
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/checklist.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.checklist'
            ],
            'table' => [
                'settings' => [
                    'class' => 'Table',
                    'inlineToolbar' => true,
                    'config' => [
                        'rows' => 2,
                        'cols' => 3,
                    ],
                ],
                'validation' => [
                    'content' => [
                        'type' => 'array',
                        'data' => [
                            '-' => [
                                'type' => 'array',
                                'data' => [
                                    '-' => [
                                        'type' => 'string',
                                    ]
                                ]
                            ]
                        ]
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/table.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.table'
            ],
            'quote' => [
                'settings' => [
                    'class' => 'Quote',
                    'inlineToolbar' => true,
                    'shortcut' => 'CMD+SHIFT+O',
                    'config' => [
                        'quotePlaceholder' => 'Enter a quote',
                        'captionPlaceholder' => 'Quote\'s author',
                    ],
                ],
                'validation' => [
                    'text' => [
                        'type' => 'string',
                    ],
                    'alignment' => [
                        'type' => 'string',
                    ],
                    'caption' => [
                        'type' => 'string',
                    ],
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/quote.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.quote'
            ],
            'code' => [
                'settings' => [
                    'class' => 'CodeTool',
                ],
                'validation' => [
                    'code' => [
                        'type' => 'string'
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/code.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.code'
            ],
            'embed' => [
                'settings' => [
                    'class' => 'Embed',
                ],
                'validation' => [
                    'service' => [
                        'type' => 'string'
                    ],
                    'source' => [
                        'type' => 'string'
                    ],
                    'embed' => [
                        'type' => 'string'
                    ],
                    'width' => [
                        'type' => 'int'
                    ],
                    'height' => [
                        'type' => 'int'
                    ],
                    'caption' => [
                        'type' => 'string',
                        'required' => false,
                    ],
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/embed.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.embed'
            ],
            'raw' => [
                'settings' => [
                    'class' => 'RawTool'
                ],
                'validation' => [
                    'html' => [
                        'type' => 'string',
                        'allowedTags' => '*',
                    ]
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/raw.umd.cjs',
                ],
                'view' => 'reazzon.editor::blocks.raw'
            ],
            'delimiter' => [
                'settings' => [
                    'class' => 'Delimiter'
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/delimiter.umd.cjs',
                ],
                'validation' => [],
                'view' => 'reazzon.editor::blocks.delimiter'
            ],
            'underline' => [
                'settings' => [
                    'class' => 'Underline'
                ],
                'scripts' => [
                    '/plugins/reazzon/editor/formwidgets/editorjs/assets/js/tools/underline.umd.cjs',
                ]
            ]
        ];
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    private function registerErrorHandler(): void
    {
        \App::error(function (PluginErrorException $exception) {
            return app(ResponseFactory::class)
                ->make(
                    $exception->render(),
                    $exception->getCode()
                );
        });
    }
}
