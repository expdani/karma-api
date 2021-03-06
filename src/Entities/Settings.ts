import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Settings extends BaseEntity {
  @PrimaryColumn({ name: "server_id" })
  server_id!: string;

  @Column("boolean", { default: true })
  karma_enabled: boolean = true;

  @Column("boolean", { default: true })
  karma_reactions: boolean = true;

  @Column("boolean", { default: false })
  random_message_events_enabled: boolean = false;

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at!: Date;
}
