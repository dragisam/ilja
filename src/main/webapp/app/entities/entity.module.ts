import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IljaDisciplineModule } from './discipline/discipline.module';
import { IljaProgramModule } from './program/program.module';
import { IljaCourseModule } from './course/course.module';
import { IljaLessonModule } from './lesson/lesson.module';
import { IljaResourceModule } from './resource/resource.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        IljaDisciplineModule,
        IljaProgramModule,
        IljaCourseModule,
        IljaLessonModule,
        IljaResourceModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IljaEntityModule {}
