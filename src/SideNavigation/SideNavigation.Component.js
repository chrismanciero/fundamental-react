import React from 'react'
import { } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'
import { SideNav, SideNavList, SideNavGroup } from '../'

export const SideNavigationComponent = () => {
    const sideNavOneLevelCode = `<SideNav>
    <SideNavList links=
        {[
            { id: 'item-1', url: '#', name: 'Link Item' },
            { id: 'item-2', url: '#', name: 'Link Item' },
            { id: 'item-3', url: '#', name: 'Link Item' },
            { id: 'item-4', url: '#', name: 'Link Item' },
            { id: 'item-5', url: '#', name: 'Link Item' }
        ]}>
    </SideNavList>
</SideNav>`

    const sideNavWithTitlesCode = `<SideNav>
    <SideNavGroup title="Group Title">
        <SideNavList links=
            {[
                { id: 'item-1', url: '#', name: 'Link Item' },
                { id: 'item-2', url: '#', name: 'Link Item' },
                { id: 'item-3', url: '#', name: 'Link Item' },
                { id: 'item-4', url: '#', name: 'Link Item' },
                { id: 'item-5', url: '#', name: 'Link Item' }
            ]}>
        </SideNavList>
    </SideNavGroup>
    <SideNavGroup title="Group Title">
        <SideNavList links=
            {[
                { id: 'item-6', url: '#', name: 'Link Item' },
                { id: 'item-7', url: '#', name: 'Link Item' },
                { id: 'item-8', url: '#', name: 'Link Item' },
                { id: 'item-9', url: '#', name: 'Link Item' },
                { id: 'item-10', url: '#', name: 'Link Item' }
            ]}>
        </SideNavList>
    </SideNavGroup>
</SideNav>`

    const sideNavMultiLevelCode = `<SideNav>
    <SideNavList links=
        {[
            { id: 'item-1', url: '#', name: 'Link Item 1' },
            {
                id: 'item-2', url: '#', name: 'Link Item 2', hasChild: true, child: [
                    { id: 'subitem-21', url: '#', name: 'Item 1' },
                    { id: 'subitem-22', url: '#', name: 'Item 2' },
                    { id: 'subitem-23', url: '#', name: 'Item 3' },
                    { id: 'subitem-24', url: '#', name: 'Item 4' }]
            },
            { id: 'item-3', url: '#', name: 'Link Item 3' },
            {
                id: 'item-4', url: '#', name: 'Link Item 4', hasChild: true, child: [
                    { id: 'subitem-41', url: '#', name: 'Item 1' },
                    { id: 'subitem-42', url: '#', name: 'Item 2' },
                    { id: 'subitem-43', url: '#', name: 'Item 3' },
                    { id: 'subitem-44', url: '#', name: 'Item 4' }]
            },
            { id: 'item-5', url: '#', name: 'Link Item' }
        ]}>
    </SideNavList>
</SideNav>`

    const sideNavWithIconsCode = `<SideNav>
    <SideNavList links=
        {[
            { id: 'item-1', url: '#', name: 'Link Item', glyph: 'home' },
            { id: 'item-2', url: '#', name: 'Link Item', glyph: 'home' },
            { id: 'item-3', url: '#', name: 'Link Item', glyph: 'home' },
            { id: 'item-4', url: '#', name: 'Link Item', glyph: 'home' },
            { id: 'item-5', url: '#', name: 'Link Item', glyph: 'home' }
        ]}>
    </SideNavList>
</SideNav>`

    const sideNavCollapsedCode = `<SideNav icons={true}>
    <SideNavList links=
        {[
            { id: 'item-1', url: '#', glyph: 'home' },
            { id: 'item-2', url: '#', glyph: 'home' },
            { id: 'item-3', url: '#', glyph: 'home' },
            { id: 'item-4', url: '#', glyph: 'home' },
            { id: 'item-5', url: '#', glyph: 'home' }
        ]}>
    </SideNavList>
</SideNav>`

    return (
        <div>
            <Header>Side Navigation</Header>
            <Description>The left navigation can always display or expand/collapse using the menu icon within the global navigation.</Description>
            <Import module="SideNav, SideNavList, SideNavGroup" path="/fundamental-react/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'icons', description: 'Bool - when set to \'true\' enables side navigation collapsed with icons.' },
                    { name: 'links', description: 'Array - an array of objects with keys \'id\', \'url\', \'name\', \'hasChild\', \'child\', and \'glyph\' setting the attributes of the links.' },
                    { name: 'id', description: 'String - the \'id\' of the link.' },
                    { name: 'url', description: 'String - the \'url\' of the link.' },
                    { name: 'name', description: 'String - the \'name\' of the link.' },
                    { name: 'hasChild', description: 'Bool - when set to \'true\' enables a second level of navigation.' },
                    { name: 'child', description: 'Array - an array of objects with keys \'id\', \'url\', and \'name\' setting the attributes of the sublinks' },
                    { name: 'glyph', description: 'String - the name of the icon for navigation list with icons.' }

                ]} />

            <Separator />

            <h2>Side Navigation with one level</h2>
            <DocsTile>
                <SideNav>
                    <SideNavList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Link Item' },
                            { id: 'item_2', url: '#', name: 'Link Item' },
                            { id: 'item_3', url: '#', name: 'Link Item' },
                            { id: 'item_4', url: '#', name: 'Link Item' },
                            { id: 'item_5', url: '#', name: 'Link Item' }
                        ]}>

                    </SideNavList>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavOneLevelCode}</DocsText>

            <Separator />

            <h2>Side navigation with titles</h2>
            <Description>Use this to group navigation. Titles are not clickable.</Description>
            <DocsTile>
                <SideNav>
                    <SideNavGroup title="Group Title">
                        <SideNavList links=
                            {[
                                { id: 'item_1', url: '#', name: 'Link Item' },
                                { id: 'item_2', url: '#', name: 'Link Item' },
                                { id: 'item_3', url: '#', name: 'Link Item' },
                                { id: 'item_4', url: '#', name: 'Link Item' },
                                { id: 'item_5', url: '#', name: 'Link Item' }
                            ]}>
                        </SideNavList>
                    </SideNavGroup>
                    <SideNavGroup title="Group Title">
                        <SideNavList links=
                            {[
                                { id: 'item_6', url: '#', name: 'Link Item' },
                                { id: 'item_7', url: '#', name: 'Link Item' },
                                { id: 'item_8', url: '#', name: 'Link Item' },
                                { id: 'item_9', url: '#', name: 'Link Item' },
                                { id: 'item_10', url: '#', name: 'Link Item' }
                            ]}>
                        </SideNavList>
                    </SideNavGroup>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavWithTitlesCode}</DocsText>

            <Separator />

            <h2>Side navigation with multiple levels</h2>
            <Description>Use this when there is more than one level of hierarchy in the left navigation. Each level can be expanded and collapsed.</Description>
            <DocsTile>
                <SideNav>
                    <SideNavList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Link Item 1' },
                            {
                                id: 'item_2', url: '#', name: 'Link Item 2', hasChild: true, child: [
                                    { id: 'subitem_21', url: '#', name: 'Item 1' },
                                    { id: 'subitem_22', url: '#', name: 'Item 2' },
                                    { id: 'subitem_23', url: '#', name: 'Item 3' },
                                    { id: 'subitem_24', url: '#', name: 'Item 4' }]
                            },
                            { id: 'item_3', url: '#', name: 'Link Item 3' },
                            {
                                id: 'item_4', url: '#', name: 'Link Item 4', hasChild: true, child: [
                                    { id: 'subitem_41', url: '#', name: 'Item 1' },
                                    { id: 'subitem_42', url: '#', name: 'Item 2' },
                                    { id: 'subitem_43', url: '#', name: 'Item 3' },
                                    { id: 'subitem_44', url: '#', name: 'Item 4' }]
                            },
                            { id: 'item_5', url: '#', name: 'Link Item' }
                        ]}>
                    </SideNavList>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavMultiLevelCode}</DocsText>

            <Separator />

            <h2>Side navigation with icons</h2>
            <DocsTile>
                <SideNav>
                    <SideNavList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Link Item', glyph: 'home' },
                            { id: 'item_2', url: '#', name: 'Link Item', glyph: 'home' },
                            { id: 'item_3', url: '#', name: 'Link Item', glyph: 'home' },
                            { id: 'item_4', url: '#', name: 'Link Item', glyph: 'home' },
                            { id: 'item_5', url: '#', name: 'Link Item', glyph: 'home' }
                        ]}>
                    </SideNavList>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavWithIconsCode}</DocsText>

            <Separator />

            <h2>Side navigation collapsed with icon.</h2>
            <Description>The user can identify which level they are on based on the icon displayed as selected when the navigation is collapsed. Note that the suggested use is when there is only one level of navigation as the user can only see one level of navigation when collapsed.</Description>
            <DocsTile>
                <SideNav icons={true}>
                    <SideNavList links=
                        {[
                            { id: 'item_1', url: '#', glyph: 'home' },
                            { id: 'item_2', url: '#', glyph: 'home' },
                            { id: 'item_3', url: '#', glyph: 'home' },
                            { id: 'item_4', url: '#', glyph: 'home' },
                            { id: 'item_5', url: '#', glyph: 'home' }
                        ]}>
                    </SideNavList>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavCollapsedCode}</DocsText>


        </div>
    );
}