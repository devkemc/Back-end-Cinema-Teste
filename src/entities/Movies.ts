import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("movies")
  class Movies {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      name!: string;
    
      @Column()
      sinopse!: string;
  
    @Column()
      id_kind!: string;
  
    @Column()
    release_date_of!: Date;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Movies };
  