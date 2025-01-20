import { __ } from '@wordpress/i18n';
import { registerBlockType, wp_kses_post  } from '@wordpress/blocks';
import { PanelBody, PanelRow, SelectControl, Button, TextareaControl, ToolbarGroup, ToolbarButton,
	ToolbarDropdownMenu} from '@wordpress/components';
import { useBlockProps, InspectorControls, RichText , BlockControls } from '@wordpress/block-editor';
import metadata from './block.json';
import "highlight.js/styles/github-dark.css"

registerBlockType(metadata.name, {
    edit: ({ setAttributes, attributes }) => {
        let { code } = attributes;
        const changeLanguage = (newLanguage) => {
            setAttributes({ language: newLanguage })
        }

        return (
            <>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarDropdownMenu
							icon="embed-generic"
							label={__('Language')}
							controls={[
								{
									title: __('Javascript'),
									onClick: () => changeLanguage('javascript'),
								},
								{
									title: __('JAVA'),
									onClick: () => changeLanguage('java'),
								},
								{
									title: __('PHP'),
									onClick: () => changeLanguage('php'),
								},
								{
									title: __('JSON'),
									onClick: () => changeLanguage('json'),
								},
								{
									title: __('XML'),
									onClick: () => changeLanguage('xml'),
								},
								{
									title: __('CSS'),
									onClick: () => changeLanguage('css'),
								},
								{
									title: __('SQL'),
									onClick: () => changeLanguage('sql'),
								},
								{
									title: __('text'),
									onClick: () => changeLanguage('plaintext'),
								},
							]}
						/>
					</ToolbarGroup>
				</BlockControls>
                <div {...useBlockProps()} style={{ backgroundColor: "white" }}>
                    <pre>
                        <TextareaControl
                            help={"Enter your plain code above, choose-language : " + (attributes.language ? attributes.language : 'please choose language')}
                            label="Source Code"
                            onChange={(newText) => setAttributes({ code: newText })}
                            value={code}
                        />
                    </pre>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        let { language , code} = attributes;
        return (
            <div {...useBlockProps.save()}>
                <pre>
					<RichText.Content
						tagName="code"
						value={code}
						className={language ? `language-${language}` : 'language-plaintext'}
					>
					</RichText.Content>
                </pre>
            </div>
        );
    },
});
