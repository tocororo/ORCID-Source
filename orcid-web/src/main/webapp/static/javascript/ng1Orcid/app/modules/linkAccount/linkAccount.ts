import * as angular 
    from 'angular';

import { Directive, NgModule } 
    from '@angular/core';

import { downgradeComponent, UpgradeModule } 
    from '@angular/upgrade/static';

//User generated
import { LinkAccountComponent } 
    from './linkAccount.component';

import { CommonNg2Module }
    from './../common/common';

// This is the Angular 1 part of the module
export const LinkAccountModule = angular.module(
    'LinkAccountModule', 
    []
);

// This is the Angular 2 part of the module
@NgModule(
    {
        imports: [
            CommonNg2Module
        ],
        declarations: [ 
            LinkAccountComponent
        ],
        entryComponents: [ 
            LinkAccountComponent 
        ]
    }
)
export class LinkAccountNg2Module {}

// components migrated to angular 2 should be downgraded here
//Must convert as much as possible of our code to directives
LinkAccountModule.directive(
    'linkAccountNg2', 
    <any>downgradeComponent(
        {
            component: LinkAccountComponent,
        }
    )
);
