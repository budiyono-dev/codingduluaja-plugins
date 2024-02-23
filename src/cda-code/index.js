import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, PanelRow, SelectControl, Button, TextareaControl } from '@wordpress/components';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import metadata from './block.json';
import "highlight.js/styles/github-dark.css"

registerBlockType(metadata.name, {
    edit: ({ setAttributes, attributes }) => {
        let { code, language } = attributes;
        const changeCode = (newText) => {
            setAttributes({ code: newText });
        }
        const changeLanguage = (newLanguage) => {
            setAttributes({ language: newLanguage })
        }

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Set Language">
                        <PanelRow>
                            <SelectControl
                                required={true}
                                onChange={changeLanguage}
                                value={language}
                                options={[
                                    {
                                        label: 'Select an Option',
                                        value: ''
                                    },
                                    {
                                        label: 'Java',
                                        value: 'java'
                                    },
                                    {
                                        label: 'PHP',
                                        value: 'php'
                                    },
                                    {
                                        label: 'Javascript',
                                        value: 'javascript'
                                    },
                                    {
                                        label: 'JSON',
                                        value: 'json'
                                    },
                                    {
                                        label: 'XML',
                                        value: 'xml'
                                    },
                                    {
                                        label: 'CSS',
                                        value: 'css'
                                    },
                                    {
                                        label: 'Plaintext',
                                        value: 'plaintext'
                                    },
									{
                                        label: 'SQL',
                                        value: 'sql'
                                    }
                                ]}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div {...useBlockProps()} style={{ backgroundColor: "white" }}>
                    <pre>
                        <TextareaControl
                            help="Enter your plain code above"
                            label="Cda Code"
                            onChange={changeCode}
                            value={code}
                        />
                    </pre>
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        let { code, language } = attributes;
        return (
            <div {...useBlockProps.save()}>
                <button type="button" className="cda-copy-code" data-cda-code={code}>
                    Copy
                </button>
                <pre>
                    <code className={language ? `language-${language}` : ''}>
                        {code}
                    </code>
                </pre>
            </div>
        );
    },
});
